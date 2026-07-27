import CurrentClassickDrakoriaGuideKeywordPage, { generateMetadata } from './current-classick-drakoria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaGuideKeywordPage />;
}
