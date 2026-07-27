import NewNostaltherWebsiteKeywordPage, { generateMetadata } from './new-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherWebsiteKeywordPage />;
}
