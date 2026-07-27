import CustomTibijkaGuideKeywordPage, { generateMetadata } from './custom-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaGuideKeywordPage />;
}
