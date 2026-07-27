import Saintsot12RealMapServerKeywordPage, { generateMetadata } from './saintsot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12RealMapServerKeywordPage />;
}
