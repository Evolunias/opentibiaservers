import CurrentClassicusGuideKeywordPage, { generateMetadata } from './current-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusGuideKeywordPage />;
}
