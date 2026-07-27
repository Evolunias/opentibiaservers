import CustomMidhemGuideKeywordPage, { generateMetadata } from './custom-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemGuideKeywordPage />;
}
