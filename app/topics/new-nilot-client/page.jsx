import NewNilotClientKeywordPage, { generateMetadata } from './new-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotClientKeywordPage />;
}
