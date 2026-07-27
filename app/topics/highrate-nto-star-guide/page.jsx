import HighrateNtoStarGuideKeywordPage, { generateMetadata } from './highrate-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarGuideKeywordPage />;
}
