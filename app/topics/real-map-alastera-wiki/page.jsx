import RealMapAlasteraWikiKeywordPage, { generateMetadata } from './real-map-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraWikiKeywordPage />;
}
