import RealMapTibiaoriginsServerKeywordPage, { generateMetadata } from './real-map-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaoriginsServerKeywordPage />;
}
