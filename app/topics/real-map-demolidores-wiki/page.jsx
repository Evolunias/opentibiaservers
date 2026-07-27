import RealMapDemolidoresWikiKeywordPage, { generateMetadata } from './real-map-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDemolidoresWikiKeywordPage />;
}
