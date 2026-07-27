import NoResetStatusMexicoKeywordPage, { generateMetadata } from './no-reset-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusMexicoKeywordPage />;
}
