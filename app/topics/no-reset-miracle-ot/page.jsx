import NoResetMiracleOtKeywordPage, { generateMetadata } from './no-reset-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleOtKeywordPage />;
}
