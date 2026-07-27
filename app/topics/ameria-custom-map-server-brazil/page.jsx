import AmeriaCustomMapServerBrazilKeywordPage, { generateMetadata } from './ameria-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCustomMapServerBrazilKeywordPage />;
}
