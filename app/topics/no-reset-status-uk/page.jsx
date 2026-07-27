import NoResetStatusUkKeywordPage, { generateMetadata } from './no-reset-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusUkKeywordPage />;
}
