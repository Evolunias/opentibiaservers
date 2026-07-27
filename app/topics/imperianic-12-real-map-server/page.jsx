import Imperianic12RealMapServerKeywordPage, { generateMetadata } from './imperianic-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12RealMapServerKeywordPage />;
}
