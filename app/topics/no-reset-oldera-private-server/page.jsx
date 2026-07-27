import NoResetOlderaPrivateServerKeywordPage, { generateMetadata } from './no-reset-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaPrivateServerKeywordPage />;
}
