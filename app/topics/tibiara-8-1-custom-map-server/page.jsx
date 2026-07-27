import Tibiara81CustomMapServerKeywordPage, { generateMetadata } from './tibiara-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara81CustomMapServerKeywordPage />;
}
