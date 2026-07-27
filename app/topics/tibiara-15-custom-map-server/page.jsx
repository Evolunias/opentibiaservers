import Tibiara15CustomMapServerKeywordPage, { generateMetadata } from './tibiara-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15CustomMapServerKeywordPage />;
}
