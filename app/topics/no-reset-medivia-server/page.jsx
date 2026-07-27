import NoResetMediviaServerKeywordPage, { generateMetadata } from './no-reset-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaServerKeywordPage />;
}
