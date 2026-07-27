import RealMapTibiaoriginsClientKeywordPage, { generateMetadata } from './real-map-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaoriginsClientKeywordPage />;
}
