import Classicus71CustomMapServerKeywordPage, { generateMetadata } from './classicus-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71CustomMapServerKeywordPage />;
}
