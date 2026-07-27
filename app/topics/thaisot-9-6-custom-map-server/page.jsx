import Thaisot96CustomMapServerKeywordPage, { generateMetadata } from './thaisot-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96CustomMapServerKeywordPage />;
}
