import HighrateCyntaraWebsiteKeywordPage, { generateMetadata } from './highrate-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraWebsiteKeywordPage />;
}
