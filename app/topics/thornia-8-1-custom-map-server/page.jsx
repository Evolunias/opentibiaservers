import Thornia81CustomMapServerKeywordPage, { generateMetadata } from './thornia-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81CustomMapServerKeywordPage />;
}
