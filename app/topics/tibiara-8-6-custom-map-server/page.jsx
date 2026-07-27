import Tibiara86CustomMapServerKeywordPage, { generateMetadata } from './tibiara-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara86CustomMapServerKeywordPage />;
}
