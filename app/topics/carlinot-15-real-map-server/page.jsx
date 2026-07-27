import Carlinot15RealMapServerKeywordPage, { generateMetadata } from './carlinot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15RealMapServerKeywordPage />;
}
