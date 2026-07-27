import TopTibiantisGuideKeywordPage, { generateMetadata } from './top-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisGuideKeywordPage />;
}
