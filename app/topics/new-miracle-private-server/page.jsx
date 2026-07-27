import NewMiraclePrivateServerKeywordPage, { generateMetadata } from './new-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiraclePrivateServerKeywordPage />;
}
