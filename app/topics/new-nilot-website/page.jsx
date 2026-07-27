import NewNilotWebsiteKeywordPage, { generateMetadata } from './new-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotWebsiteKeywordPage />;
}
