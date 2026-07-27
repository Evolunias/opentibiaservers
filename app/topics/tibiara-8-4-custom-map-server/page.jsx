import Tibiara84CustomMapServerKeywordPage, { generateMetadata } from './tibiara-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara84CustomMapServerKeywordPage />;
}
