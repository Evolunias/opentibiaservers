import NoResetUnlineOtKeywordPage, { generateMetadata } from './no-reset-unline-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineOtKeywordPage />;
}
