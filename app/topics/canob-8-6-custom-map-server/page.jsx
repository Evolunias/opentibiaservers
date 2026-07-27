import Canob86CustomMapServerKeywordPage, { generateMetadata } from './canob-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob86CustomMapServerKeywordPage />;
}
