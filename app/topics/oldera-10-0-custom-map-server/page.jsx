import Oldera100CustomMapServerKeywordPage, { generateMetadata } from './oldera-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera100CustomMapServerKeywordPage />;
}
