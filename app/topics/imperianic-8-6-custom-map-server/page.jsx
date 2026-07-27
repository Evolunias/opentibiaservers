import Imperianic86CustomMapServerKeywordPage, { generateMetadata } from './imperianic-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic86CustomMapServerKeywordPage />;
}
