import Carlinot12RealMapServerKeywordPage, { generateMetadata } from './carlinot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12RealMapServerKeywordPage />;
}
