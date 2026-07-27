import Miracle12RealMapServerKeywordPage, { generateMetadata } from './miracle-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12RealMapServerKeywordPage />;
}
