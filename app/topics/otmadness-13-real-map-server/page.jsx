import Otmadness13RealMapServerKeywordPage, { generateMetadata } from './otmadness-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13RealMapServerKeywordPage />;
}
