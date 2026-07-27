import Otmadness12CustomMapServerKeywordPage, { generateMetadata } from './otmadness-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12CustomMapServerKeywordPage />;
}
