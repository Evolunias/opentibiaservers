import CurrentCarlinotGuideKeywordPage, { generateMetadata } from './current-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotGuideKeywordPage />;
}
