import NoResetUnlineOtsKeywordPage, { generateMetadata } from './no-reset-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineOtsKeywordPage />;
}
