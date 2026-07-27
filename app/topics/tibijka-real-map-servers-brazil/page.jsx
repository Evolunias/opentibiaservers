import TibijkaRealMapServersBrazilKeywordPage, { generateMetadata } from './tibijka-real-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRealMapServersBrazilKeywordPage />;
}
