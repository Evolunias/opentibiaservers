import BlazeraMexicoServerKeywordPage, { generateMetadata } from './blazera-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraMexicoServerKeywordPage />;
}
