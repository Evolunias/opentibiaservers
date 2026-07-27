import AmeriaRealMapServersLatinAmericaKeywordPage, { generateMetadata } from './ameria-real-map-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServersLatinAmericaKeywordPage />;
}
