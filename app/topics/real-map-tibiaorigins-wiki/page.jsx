import RealMapTibiaoriginsWikiKeywordPage, { generateMetadata } from './real-map-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaoriginsWikiKeywordPage />;
}
