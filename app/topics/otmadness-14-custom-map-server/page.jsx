import Otmadness14CustomMapServerKeywordPage, { generateMetadata } from './otmadness-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness14CustomMapServerKeywordPage />;
}
