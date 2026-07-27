import CustomCarlinotGuideKeywordPage, { generateMetadata } from './custom-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotGuideKeywordPage />;
}
