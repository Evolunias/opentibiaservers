import Thaisot14CustomMapServerKeywordPage, { generateMetadata } from './thaisot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14CustomMapServerKeywordPage />;
}
