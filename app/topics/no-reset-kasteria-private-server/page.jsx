import NoResetKasteriaPrivateServerKeywordPage, { generateMetadata } from './no-reset-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaPrivateServerKeywordPage />;
}
