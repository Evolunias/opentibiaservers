import NoResetMiracleLoginKeywordPage, { generateMetadata } from './no-reset-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleLoginKeywordPage />;
}
