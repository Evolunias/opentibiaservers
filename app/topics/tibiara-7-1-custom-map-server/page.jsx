import Tibiara71CustomMapServerKeywordPage, { generateMetadata } from './tibiara-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara71CustomMapServerKeywordPage />;
}
