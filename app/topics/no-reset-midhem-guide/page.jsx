import NoResetMidhemGuideKeywordPage, { generateMetadata } from './no-reset-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemGuideKeywordPage />;
}
