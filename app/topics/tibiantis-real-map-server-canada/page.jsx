import TibiantisRealMapServerCanadaKeywordPage, { generateMetadata } from './tibiantis-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRealMapServerCanadaKeywordPage />;
}
