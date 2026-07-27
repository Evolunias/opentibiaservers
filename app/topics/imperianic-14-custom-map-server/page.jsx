import Imperianic14CustomMapServerKeywordPage, { generateMetadata } from './imperianic-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic14CustomMapServerKeywordPage />;
}
