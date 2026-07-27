import PopularCyntaraWebsiteKeywordPage, { generateMetadata } from './popular-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraWebsiteKeywordPage />;
}
