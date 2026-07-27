import Imperianic14RealMapServerKeywordPage, { generateMetadata } from './imperianic-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic14RealMapServerKeywordPage />;
}
