import BestSerenityGuideKeywordPage, { generateMetadata } from './best-serenity-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityGuideKeywordPage />;
}
