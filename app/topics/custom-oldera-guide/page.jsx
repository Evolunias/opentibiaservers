import CustomOlderaGuideKeywordPage, { generateMetadata } from './custom-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaGuideKeywordPage />;
}
