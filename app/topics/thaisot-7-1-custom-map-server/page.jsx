import Thaisot71CustomMapServerKeywordPage, { generateMetadata } from './thaisot-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71CustomMapServerKeywordPage />;
}
