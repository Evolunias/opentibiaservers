import Classicus15CustomMapServerKeywordPage, { generateMetadata } from './classicus-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15CustomMapServerKeywordPage />;
}
