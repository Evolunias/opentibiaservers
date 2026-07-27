import AmeriaCustomMapServersMexicoKeywordPage, { generateMetadata } from './ameria-custom-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCustomMapServersMexicoKeywordPage />;
}
