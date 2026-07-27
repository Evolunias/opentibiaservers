import Otmadness15CustomMapServerKeywordPage, { generateMetadata } from './otmadness-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness15CustomMapServerKeywordPage />;
}
