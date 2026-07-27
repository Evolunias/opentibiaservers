import Thaisot84CustomMapServerKeywordPage, { generateMetadata } from './thaisot-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot84CustomMapServerKeywordPage />;
}
