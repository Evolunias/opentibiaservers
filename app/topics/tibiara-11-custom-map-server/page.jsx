import Tibiara11CustomMapServerKeywordPage, { generateMetadata } from './tibiara-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11CustomMapServerKeywordPage />;
}
