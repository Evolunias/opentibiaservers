import NoResetStatusSwedenKeywordPage, { generateMetadata } from './no-reset-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusSwedenKeywordPage />;
}
