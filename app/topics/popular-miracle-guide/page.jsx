import PopularMiracleGuideKeywordPage, { generateMetadata } from './popular-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleGuideKeywordPage />;
}
