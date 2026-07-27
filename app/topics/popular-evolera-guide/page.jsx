import PopularEvoleraGuideKeywordPage, { generateMetadata } from './popular-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraGuideKeywordPage />;
}
