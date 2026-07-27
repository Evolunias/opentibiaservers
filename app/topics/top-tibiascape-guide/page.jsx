import TopTibiascapeGuideKeywordPage, { generateMetadata } from './top-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeGuideKeywordPage />;
}
