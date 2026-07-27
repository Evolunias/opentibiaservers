import Thaisot74CustomMapServerKeywordPage, { generateMetadata } from './thaisot-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot74CustomMapServerKeywordPage />;
}
