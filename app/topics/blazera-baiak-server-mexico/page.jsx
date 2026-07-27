import BlazeraBaiakServerMexicoKeywordPage, { generateMetadata } from './blazera-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraBaiakServerMexicoKeywordPage />;
}
