import Classicus76CustomMapServerKeywordPage, { generateMetadata } from './classicus-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76CustomMapServerKeywordPage />;
}
