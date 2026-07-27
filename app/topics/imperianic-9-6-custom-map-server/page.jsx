import Imperianic96CustomMapServerKeywordPage, { generateMetadata } from './imperianic-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic96CustomMapServerKeywordPage />;
}
