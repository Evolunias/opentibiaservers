import NoResetCarlinotPrivateServerKeywordPage, { generateMetadata } from './no-reset-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotPrivateServerKeywordPage />;
}
