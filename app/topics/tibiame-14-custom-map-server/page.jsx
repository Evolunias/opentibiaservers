import Tibiame14CustomMapServerKeywordPage, { generateMetadata } from './tibiame-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame14CustomMapServerKeywordPage />;
}
