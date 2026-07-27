import BlazeraBaiakServerArgentinaKeywordPage, { generateMetadata } from './blazera-baiak-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraBaiakServerArgentinaKeywordPage />;
}
