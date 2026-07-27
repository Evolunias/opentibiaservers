import RealMapKasteriaWikiKeywordPage, { generateMetadata } from './real-map-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaWikiKeywordPage />;
}
