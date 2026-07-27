import Tibiara74CustomMapServerKeywordPage, { generateMetadata } from './tibiara-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara74CustomMapServerKeywordPage />;
}
