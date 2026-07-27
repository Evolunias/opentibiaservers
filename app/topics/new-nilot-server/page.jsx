import NewNilotServerKeywordPage, { generateMetadata } from './new-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotServerKeywordPage />;
}
