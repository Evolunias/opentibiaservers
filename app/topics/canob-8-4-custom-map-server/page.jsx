import Canob84CustomMapServerKeywordPage, { generateMetadata } from './canob-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob84CustomMapServerKeywordPage />;
}
