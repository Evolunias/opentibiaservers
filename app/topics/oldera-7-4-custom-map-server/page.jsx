import Oldera74CustomMapServerKeywordPage, { generateMetadata } from './oldera-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera74CustomMapServerKeywordPage />;
}
