import Thaisot100CustomMapServerKeywordPage, { generateMetadata } from './thaisot-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot100CustomMapServerKeywordPage />;
}
