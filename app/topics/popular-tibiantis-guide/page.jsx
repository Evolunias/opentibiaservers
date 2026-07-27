import PopularTibiantisGuideKeywordPage, { generateMetadata } from './popular-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisGuideKeywordPage />;
}
