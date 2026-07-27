import Tibiame11CustomMapServerKeywordPage, { generateMetadata } from './tibiame-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11CustomMapServerKeywordPage />;
}
