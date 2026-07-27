import Saintsot14RealMapServerKeywordPage, { generateMetadata } from './saintsot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot14RealMapServerKeywordPage />;
}
