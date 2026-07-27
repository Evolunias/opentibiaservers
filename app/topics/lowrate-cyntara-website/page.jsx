import LowrateCyntaraWebsiteKeywordPage, { generateMetadata } from './lowrate-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraWebsiteKeywordPage />;
}
