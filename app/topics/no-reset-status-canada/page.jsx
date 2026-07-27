import NoResetStatusCanadaKeywordPage, { generateMetadata } from './no-reset-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusCanadaKeywordPage />;
}
