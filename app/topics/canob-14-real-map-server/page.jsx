import Canob14RealMapServerKeywordPage, { generateMetadata } from './canob-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14RealMapServerKeywordPage />;
}
