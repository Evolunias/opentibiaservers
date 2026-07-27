import Blazera96CustomMapServerKeywordPage, { generateMetadata } from './blazera-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera96CustomMapServerKeywordPage />;
}
