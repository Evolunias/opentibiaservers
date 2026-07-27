import Otmadness11CustomMapServerKeywordPage, { generateMetadata } from './otmadness-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11CustomMapServerKeywordPage />;
}
