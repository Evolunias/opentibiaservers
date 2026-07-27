import Tibiame12CustomMapServerKeywordPage, { generateMetadata } from './tibiame-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12CustomMapServerKeywordPage />;
}
