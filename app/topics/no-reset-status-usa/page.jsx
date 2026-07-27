import NoResetStatusUsaKeywordPage, { generateMetadata } from './no-reset-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusUsaKeywordPage />;
}
