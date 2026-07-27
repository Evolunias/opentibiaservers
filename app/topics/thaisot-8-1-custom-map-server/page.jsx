import Thaisot81CustomMapServerKeywordPage, { generateMetadata } from './thaisot-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81CustomMapServerKeywordPage />;
}
