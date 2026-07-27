import RealMapSabrehavenPrivateServerKeywordPage, { generateMetadata } from './real-map-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenPrivateServerKeywordPage />;
}
