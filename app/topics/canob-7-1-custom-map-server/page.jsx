import Canob71CustomMapServerKeywordPage, { generateMetadata } from './canob-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob71CustomMapServerKeywordPage />;
}
