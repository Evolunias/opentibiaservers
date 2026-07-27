import Blazera13CustomMapServerKeywordPage, { generateMetadata } from './blazera-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13CustomMapServerKeywordPage />;
}
