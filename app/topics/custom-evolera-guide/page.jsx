import CustomEvoleraGuideKeywordPage, { generateMetadata } from './custom-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraGuideKeywordPage />;
}
