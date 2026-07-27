import Carlinot13RealMapServerKeywordPage, { generateMetadata } from './carlinot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13RealMapServerKeywordPage />;
}
