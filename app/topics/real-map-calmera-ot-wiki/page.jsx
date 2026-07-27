import RealMapCalmeraOtWikiKeywordPage, { generateMetadata } from './real-map-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCalmeraOtWikiKeywordPage />;
}
