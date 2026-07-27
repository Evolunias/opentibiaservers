import Blazera11CustomMapServerKeywordPage, { generateMetadata } from './blazera-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11CustomMapServerKeywordPage />;
}
