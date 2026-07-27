import Imperianic11CustomMapServerKeywordPage, { generateMetadata } from './imperianic-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11CustomMapServerKeywordPage />;
}
