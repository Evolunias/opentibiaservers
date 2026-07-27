import Canob15CustomMapServerKeywordPage, { generateMetadata } from './canob-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15CustomMapServerKeywordPage />;
}
