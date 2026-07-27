import AmeriaRealMapServerCanadaKeywordPage, { generateMetadata } from './ameria-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServerCanadaKeywordPage />;
}
