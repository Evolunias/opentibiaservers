import NoResetMediviaOtKeywordPage, { generateMetadata } from './no-reset-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaOtKeywordPage />;
}
