import NoResetMediviaOtsKeywordPage, { generateMetadata } from './no-reset-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaOtsKeywordPage />;
}
