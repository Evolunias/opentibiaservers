import ImperianicRealMapServerArgentinaKeywordPage, { generateMetadata } from './imperianic-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicRealMapServerArgentinaKeywordPage />;
}
