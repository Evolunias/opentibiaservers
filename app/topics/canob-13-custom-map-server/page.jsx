import Canob13CustomMapServerKeywordPage, { generateMetadata } from './canob-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13CustomMapServerKeywordPage />;
}
