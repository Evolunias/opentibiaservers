import PopularClassicusGuideKeywordPage, { generateMetadata } from './popular-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusGuideKeywordPage />;
}
