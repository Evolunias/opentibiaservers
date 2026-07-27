import RealMapTibiaoriginsKeywordPage, { generateMetadata } from './real-map-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaoriginsKeywordPage />;
}
