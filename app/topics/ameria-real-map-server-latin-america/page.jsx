import AmeriaRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './ameria-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServerLatinAmericaKeywordPage />;
}
