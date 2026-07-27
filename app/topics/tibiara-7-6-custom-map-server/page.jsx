import Tibiara76CustomMapServerKeywordPage, { generateMetadata } from './tibiara-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara76CustomMapServerKeywordPage />;
}
