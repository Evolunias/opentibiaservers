import Oxygenot11CustomMapServerKeywordPage, { generateMetadata } from './oxygenot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot11CustomMapServerKeywordPage />;
}
