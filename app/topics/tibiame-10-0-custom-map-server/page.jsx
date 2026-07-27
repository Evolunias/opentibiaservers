import Tibiame100CustomMapServerKeywordPage, { generateMetadata } from './tibiame-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame100CustomMapServerKeywordPage />;
}
