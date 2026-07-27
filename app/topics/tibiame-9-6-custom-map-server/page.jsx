import Tibiame96CustomMapServerKeywordPage, { generateMetadata } from './tibiame-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame96CustomMapServerKeywordPage />;
}
