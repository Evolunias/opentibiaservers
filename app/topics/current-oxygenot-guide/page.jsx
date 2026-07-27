import CurrentOxygenotGuideKeywordPage, { generateMetadata } from './current-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotGuideKeywordPage />;
}
