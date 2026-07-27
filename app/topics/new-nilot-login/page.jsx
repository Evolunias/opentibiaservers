import NewNilotLoginKeywordPage, { generateMetadata } from './new-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotLoginKeywordPage />;
}
