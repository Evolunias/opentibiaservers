import BlazeraNoResetServerUkKeywordPage, { generateMetadata } from './blazera-no-reset-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraNoResetServerUkKeywordPage />;
}
