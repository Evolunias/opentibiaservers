import OfficialCyntaraWebsiteKeywordPage, { generateMetadata } from './official-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraWebsiteKeywordPage />;
}
