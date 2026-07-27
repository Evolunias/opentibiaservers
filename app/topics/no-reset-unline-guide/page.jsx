import NoResetUnlineGuideKeywordPage, { generateMetadata } from './no-reset-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineGuideKeywordPage />;
}
