import Classicus11CustomMapServerKeywordPage, { generateMetadata } from './classicus-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11CustomMapServerKeywordPage />;
}
