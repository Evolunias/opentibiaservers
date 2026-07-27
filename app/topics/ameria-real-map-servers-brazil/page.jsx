import AmeriaRealMapServersBrazilKeywordPage, { generateMetadata } from './ameria-real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServersBrazilKeywordPage />;
}
