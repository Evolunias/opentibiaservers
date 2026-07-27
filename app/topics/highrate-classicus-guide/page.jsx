import HighrateClassicusGuideKeywordPage, { generateMetadata } from './highrate-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusGuideKeywordPage />;
}
