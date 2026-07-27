import Saintsot11RealMapServerKeywordPage, { generateMetadata } from './saintsot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11RealMapServerKeywordPage />;
}
