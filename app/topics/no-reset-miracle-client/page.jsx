import NoResetMiracleClientKeywordPage, { generateMetadata } from './no-reset-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleClientKeywordPage />;
}
