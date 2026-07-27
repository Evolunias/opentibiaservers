import Canob100CustomMapServerKeywordPage, { generateMetadata } from './canob-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob100CustomMapServerKeywordPage />;
}
