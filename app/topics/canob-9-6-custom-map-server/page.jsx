import Canob96CustomMapServerKeywordPage, { generateMetadata } from './canob-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob96CustomMapServerKeywordPage />;
}
