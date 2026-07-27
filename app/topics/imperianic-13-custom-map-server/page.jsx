import Imperianic13CustomMapServerKeywordPage, { generateMetadata } from './imperianic-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13CustomMapServerKeywordPage />;
}
