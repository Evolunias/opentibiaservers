import Otmadness76CustomMapServerKeywordPage, { generateMetadata } from './otmadness-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness76CustomMapServerKeywordPage />;
}
