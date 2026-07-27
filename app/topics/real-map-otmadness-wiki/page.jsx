import RealMapOtmadnessWikiKeywordPage, { generateMetadata } from './real-map-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessWikiKeywordPage />;
}
