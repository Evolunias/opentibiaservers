import CurrentTibijkaGuideKeywordPage, { generateMetadata } from './current-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaGuideKeywordPage />;
}
