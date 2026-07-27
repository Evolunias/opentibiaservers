import PopularThaisotGuideKeywordPage, { generateMetadata } from './popular-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotGuideKeywordPage />;
}
