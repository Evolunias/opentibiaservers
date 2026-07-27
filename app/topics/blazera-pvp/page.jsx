import BlazeraPvpKeywordPage, { generateMetadata } from './blazera-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPvpKeywordPage />;
}
