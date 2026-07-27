import NewMiracleServerKeywordPage, { generateMetadata } from './new-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleServerKeywordPage />;
}
