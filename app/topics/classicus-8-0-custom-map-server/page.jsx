import Classicus80CustomMapServerKeywordPage, { generateMetadata } from './classicus-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80CustomMapServerKeywordPage />;
}
