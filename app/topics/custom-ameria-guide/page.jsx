import CustomAmeriaGuideKeywordPage, { generateMetadata } from './custom-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaGuideKeywordPage />;
}
