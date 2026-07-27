import Carlinot14RealMapServerKeywordPage, { generateMetadata } from './carlinot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14RealMapServerKeywordPage />;
}
