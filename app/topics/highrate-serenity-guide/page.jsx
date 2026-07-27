import HighrateSerenityGuideKeywordPage, { generateMetadata } from './highrate-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityGuideKeywordPage />;
}
