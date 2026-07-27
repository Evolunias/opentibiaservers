import Thornia86CustomMapServerKeywordPage, { generateMetadata } from './thornia-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86CustomMapServerKeywordPage />;
}
