import Imperianic74CustomMapServerKeywordPage, { generateMetadata } from './imperianic-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic74CustomMapServerKeywordPage />;
}
