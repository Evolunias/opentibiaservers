import TopTibiaraGuideKeywordPage, { generateMetadata } from './top-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraGuideKeywordPage />;
}
