import CustomNepreniaGuideKeywordPage, { generateMetadata } from './custom-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaGuideKeywordPage />;
}
