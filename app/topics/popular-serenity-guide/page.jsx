import PopularSerenityGuideKeywordPage, { generateMetadata } from './popular-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityGuideKeywordPage />;
}
