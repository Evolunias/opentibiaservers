import Imperianic12CustomMapServerKeywordPage, { generateMetadata } from './imperianic-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12CustomMapServerKeywordPage />;
}
