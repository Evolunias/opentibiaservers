import NoResetMiracleServerKeywordPage, { generateMetadata } from './no-reset-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleServerKeywordPage />;
}
