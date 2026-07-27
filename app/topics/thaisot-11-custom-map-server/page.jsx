import Thaisot11CustomMapServerKeywordPage, { generateMetadata } from './thaisot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11CustomMapServerKeywordPage />;
}
