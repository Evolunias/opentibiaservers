import Saintsot13RealMapServerKeywordPage, { generateMetadata } from './saintsot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13RealMapServerKeywordPage />;
}
