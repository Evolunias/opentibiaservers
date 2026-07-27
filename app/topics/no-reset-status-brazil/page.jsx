import NoResetStatusBrazilKeywordPage, { generateMetadata } from './no-reset-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusBrazilKeywordPage />;
}
