import NoResetStatusEuropeKeywordPage, { generateMetadata } from './no-reset-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusEuropeKeywordPage />;
}
