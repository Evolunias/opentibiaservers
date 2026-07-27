import OfficialOlderaWebsiteKeywordPage, { generateMetadata } from './official-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaWebsiteKeywordPage />;
}
