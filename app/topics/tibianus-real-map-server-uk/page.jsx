import TibianusRealMapServerUkKeywordPage, { generateMetadata } from './tibianus-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapServerUkKeywordPage />;
}
