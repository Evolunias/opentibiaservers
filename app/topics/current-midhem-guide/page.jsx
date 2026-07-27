import CurrentMidhemGuideKeywordPage, { generateMetadata } from './current-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemGuideKeywordPage />;
}
