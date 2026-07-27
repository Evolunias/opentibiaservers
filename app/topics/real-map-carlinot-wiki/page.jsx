import RealMapCarlinotWikiKeywordPage, { generateMetadata } from './real-map-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotWikiKeywordPage />;
}
