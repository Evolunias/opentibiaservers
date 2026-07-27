import Classicus1098CustomMapServerKeywordPage, { generateMetadata } from './classicus-10-98-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098CustomMapServerKeywordPage />;
}
