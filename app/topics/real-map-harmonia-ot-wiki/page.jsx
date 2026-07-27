import RealMapHarmoniaOtWikiKeywordPage, { generateMetadata } from './real-map-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapHarmoniaOtWikiKeywordPage />;
}
