import PopularMistOfDeathGuideKeywordPage, { generateMetadata } from './popular-mist-of-death-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathGuideKeywordPage />;
}
