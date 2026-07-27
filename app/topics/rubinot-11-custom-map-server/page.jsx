import Rubinot11CustomMapServerKeywordPage, { generateMetadata } from './rubinot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11CustomMapServerKeywordPage />;
}
