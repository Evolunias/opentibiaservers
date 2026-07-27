import Tibiara80CustomMapServerKeywordPage, { generateMetadata } from './tibiara-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara80CustomMapServerKeywordPage />;
}
