import Imperianic15CustomMapServerKeywordPage, { generateMetadata } from './imperianic-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15CustomMapServerKeywordPage />;
}
