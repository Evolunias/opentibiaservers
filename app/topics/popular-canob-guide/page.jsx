import PopularCanobGuideKeywordPage, { generateMetadata } from './popular-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobGuideKeywordPage />;
}
