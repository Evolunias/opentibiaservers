import AmeriaCustomMapServerArgentinaKeywordPage, { generateMetadata } from './ameria-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCustomMapServerArgentinaKeywordPage />;
}
