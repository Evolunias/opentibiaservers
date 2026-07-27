import RealMapEternalOdysseyWikiKeywordPage, { generateMetadata } from './real-map-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEternalOdysseyWikiKeywordPage />;
}
