import Tibiara13CustomMapServerKeywordPage, { generateMetadata } from './tibiara-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13CustomMapServerKeywordPage />;
}
