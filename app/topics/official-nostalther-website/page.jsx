import OfficialNostaltherWebsiteKeywordPage, { generateMetadata } from './official-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherWebsiteKeywordPage />;
}
