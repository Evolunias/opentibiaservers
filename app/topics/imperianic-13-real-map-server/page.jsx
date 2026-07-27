import Imperianic13RealMapServerKeywordPage, { generateMetadata } from './imperianic-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13RealMapServerKeywordPage />;
}
