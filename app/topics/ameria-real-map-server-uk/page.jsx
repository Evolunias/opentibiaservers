import AmeriaRealMapServerUkKeywordPage, { generateMetadata } from './ameria-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServerUkKeywordPage />;
}
