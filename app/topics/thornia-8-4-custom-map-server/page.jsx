import Thornia84CustomMapServerKeywordPage, { generateMetadata } from './thornia-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84CustomMapServerKeywordPage />;
}
