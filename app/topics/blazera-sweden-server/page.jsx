import BlazeraSwedenServerKeywordPage, { generateMetadata } from './blazera-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSwedenServerKeywordPage />;
}
