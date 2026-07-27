import NoResetRubinotGuideKeywordPage, { generateMetadata } from './no-reset-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotGuideKeywordPage />;
}
