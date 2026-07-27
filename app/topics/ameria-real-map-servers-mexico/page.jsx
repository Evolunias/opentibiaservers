import AmeriaRealMapServersMexicoKeywordPage, { generateMetadata } from './ameria-real-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServersMexicoKeywordPage />;
}
