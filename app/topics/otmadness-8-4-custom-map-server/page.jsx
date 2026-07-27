import Otmadness84CustomMapServerKeywordPage, { generateMetadata } from './otmadness-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness84CustomMapServerKeywordPage />;
}
