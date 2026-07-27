import RealMapImperianicWikiKeywordPage, { generateMetadata } from './real-map-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicWikiKeywordPage />;
}
