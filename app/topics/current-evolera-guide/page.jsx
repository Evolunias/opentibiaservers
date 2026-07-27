import CurrentEvoleraGuideKeywordPage, { generateMetadata } from './current-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraGuideKeywordPage />;
}
