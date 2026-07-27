import NewSerenityGuideKeywordPage, { generateMetadata } from './new-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityGuideKeywordPage />;
}
