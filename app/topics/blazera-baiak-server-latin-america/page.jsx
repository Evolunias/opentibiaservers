import BlazeraBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './blazera-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraBaiakServerLatinAmericaKeywordPage />;
}
