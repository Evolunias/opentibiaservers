import TibianusRealMapServerCanadaKeywordPage, { generateMetadata } from './tibianus-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapServerCanadaKeywordPage />;
}
