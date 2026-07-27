import BlazeraBaiakServerUkKeywordPage, { generateMetadata } from './blazera-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraBaiakServerUkKeywordPage />;
}
