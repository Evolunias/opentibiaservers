import Canob11CustomMapServerKeywordPage, { generateMetadata } from './canob-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11CustomMapServerKeywordPage />;
}
