import AmeriaRealMapServerBrazilKeywordPage, { generateMetadata } from './ameria-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRealMapServerBrazilKeywordPage />;
}
