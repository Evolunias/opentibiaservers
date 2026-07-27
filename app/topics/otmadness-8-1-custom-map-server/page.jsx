import Otmadness81CustomMapServerKeywordPage, { generateMetadata } from './otmadness-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness81CustomMapServerKeywordPage />;
}
