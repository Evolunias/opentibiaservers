import BlazeraPvpServerMexicoKeywordPage, { generateMetadata } from './blazera-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPvpServerMexicoKeywordPage />;
}
