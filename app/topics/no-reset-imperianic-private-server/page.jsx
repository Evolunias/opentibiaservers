import NoResetImperianicPrivateServerKeywordPage, { generateMetadata } from './no-reset-imperianic-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicPrivateServerKeywordPage />;
}
