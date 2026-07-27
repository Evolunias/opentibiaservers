import Oldera14CustomMapServerKeywordPage, { generateMetadata } from './oldera-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14CustomMapServerKeywordPage />;
}
