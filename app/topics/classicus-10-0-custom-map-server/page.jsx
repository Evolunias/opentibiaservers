import Classicus100CustomMapServerKeywordPage, { generateMetadata } from './classicus-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100CustomMapServerKeywordPage />;
}
