import RealMapNepreniaWikiKeywordPage, { generateMetadata } from './real-map-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaWikiKeywordPage />;
}
