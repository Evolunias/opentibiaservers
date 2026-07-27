import CurrentSerenityGuideKeywordPage, { generateMetadata } from './current-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityGuideKeywordPage />;
}
