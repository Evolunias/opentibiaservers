import CustomKasteriaGuideKeywordPage, { generateMetadata } from './custom-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaGuideKeywordPage />;
}
