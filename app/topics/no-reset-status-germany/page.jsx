import NoResetStatusGermanyKeywordPage, { generateMetadata } from './no-reset-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusGermanyKeywordPage />;
}
