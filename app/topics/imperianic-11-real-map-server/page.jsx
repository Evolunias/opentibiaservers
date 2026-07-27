import Imperianic11RealMapServerKeywordPage, { generateMetadata } from './imperianic-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11RealMapServerKeywordPage />;
}
