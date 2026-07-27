import RealMapSabrehavenServerKeywordPage, { generateMetadata } from './real-map-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenServerKeywordPage />;
}
