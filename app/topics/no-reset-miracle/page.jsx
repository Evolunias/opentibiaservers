import NoResetMiracleKeywordPage, { generateMetadata } from './no-reset-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleKeywordPage />;
}
