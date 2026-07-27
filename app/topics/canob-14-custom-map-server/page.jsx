import Canob14CustomMapServerKeywordPage, { generateMetadata } from './canob-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14CustomMapServerKeywordPage />;
}
