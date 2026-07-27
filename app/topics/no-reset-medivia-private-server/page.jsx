import NoResetMediviaPrivateServerKeywordPage, { generateMetadata } from './no-reset-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaPrivateServerKeywordPage />;
}
