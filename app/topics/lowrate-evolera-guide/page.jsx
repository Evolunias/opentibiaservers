import LowrateEvoleraGuideKeywordPage, { generateMetadata } from './lowrate-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraGuideKeywordPage />;
}
