import CurrentAmeriaGuideKeywordPage, { generateMetadata } from './current-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaGuideKeywordPage />;
}
