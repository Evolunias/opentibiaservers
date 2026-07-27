import PopularTibiascapeGuideKeywordPage, { generateMetadata } from './popular-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeGuideKeywordPage />;
}
