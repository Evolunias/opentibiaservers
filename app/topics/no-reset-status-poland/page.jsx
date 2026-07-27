import NoResetStatusPolandKeywordPage, { generateMetadata } from './no-reset-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusPolandKeywordPage />;
}
