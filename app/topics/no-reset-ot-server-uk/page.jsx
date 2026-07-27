import NoResetOtServerUkKeywordPage, { generateMetadata } from './no-reset-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtServerUkKeywordPage />;
}
