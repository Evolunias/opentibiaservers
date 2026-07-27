import RealMapWikiEuropeKeywordPage, { generateMetadata } from './real-map-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiEuropeKeywordPage />;
}
