import Otmadness12RealMapServerKeywordPage, { generateMetadata } from './otmadness-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12RealMapServerKeywordPage />;
}
