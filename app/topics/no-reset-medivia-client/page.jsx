import NoResetMediviaClientKeywordPage, { generateMetadata } from './no-reset-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaClientKeywordPage />;
}
