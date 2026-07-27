import Classicus81CustomMapServerKeywordPage, { generateMetadata } from './classicus-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81CustomMapServerKeywordPage />;
}
