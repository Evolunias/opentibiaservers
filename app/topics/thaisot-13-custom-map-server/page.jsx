import Thaisot13CustomMapServerKeywordPage, { generateMetadata } from './thaisot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13CustomMapServerKeywordPage />;
}
