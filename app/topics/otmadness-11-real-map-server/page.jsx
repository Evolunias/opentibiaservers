import Otmadness11RealMapServerKeywordPage, { generateMetadata } from './otmadness-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11RealMapServerKeywordPage />;
}
