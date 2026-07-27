import NoResetOxygenotGuideKeywordPage, { generateMetadata } from './no-reset-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotGuideKeywordPage />;
}
