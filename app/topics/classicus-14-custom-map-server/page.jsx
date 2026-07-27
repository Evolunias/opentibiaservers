import Classicus14CustomMapServerKeywordPage, { generateMetadata } from './classicus-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14CustomMapServerKeywordPage />;
}
