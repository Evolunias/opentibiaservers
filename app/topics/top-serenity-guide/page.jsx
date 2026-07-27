import TopSerenityGuideKeywordPage, { generateMetadata } from './top-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityGuideKeywordPage />;
}
