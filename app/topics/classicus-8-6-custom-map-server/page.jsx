import Classicus86CustomMapServerKeywordPage, { generateMetadata } from './classicus-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86CustomMapServerKeywordPage />;
}
