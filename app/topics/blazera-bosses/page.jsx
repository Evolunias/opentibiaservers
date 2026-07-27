import BlazeraBossesKeywordPage, { generateMetadata } from './blazera-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraBossesKeywordPage />;
}
