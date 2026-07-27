import Blazera84CustomMapServerKeywordPage, { generateMetadata } from './blazera-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera84CustomMapServerKeywordPage />;
}
