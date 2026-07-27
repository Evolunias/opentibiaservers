import Canob80CustomMapServerKeywordPage, { generateMetadata } from './canob-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob80CustomMapServerKeywordPage />;
}
