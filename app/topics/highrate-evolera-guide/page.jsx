import HighrateEvoleraGuideKeywordPage, { generateMetadata } from './highrate-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraGuideKeywordPage />;
}
