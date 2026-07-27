import RealMapZuneraOtWikiKeywordPage, { generateMetadata } from './real-map-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapZuneraOtWikiKeywordPage />;
}
