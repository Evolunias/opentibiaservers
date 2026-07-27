import Tibiame76CustomMapServerKeywordPage, { generateMetadata } from './tibiame-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame76CustomMapServerKeywordPage />;
}
