import NoResetStatusNorthAmericaKeywordPage, { generateMetadata } from './no-reset-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusNorthAmericaKeywordPage />;
}
