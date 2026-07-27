import RealMapWikiCanadaKeywordPage, { generateMetadata } from './real-map-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiCanadaKeywordPage />;
}
