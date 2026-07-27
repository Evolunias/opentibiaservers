import TibianusRealMapServerMexicoKeywordPage, { generateMetadata } from './tibianus-real-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapServerMexicoKeywordPage />;
}
