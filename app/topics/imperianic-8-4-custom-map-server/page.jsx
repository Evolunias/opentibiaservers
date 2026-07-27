import Imperianic84CustomMapServerKeywordPage, { generateMetadata } from './imperianic-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic84CustomMapServerKeywordPage />;
}
