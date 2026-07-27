import Imperianic15RealMapServerKeywordPage, { generateMetadata } from './imperianic-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15RealMapServerKeywordPage />;
}
