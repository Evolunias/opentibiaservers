import CustomMediviaGuideKeywordPage, { generateMetadata } from './custom-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaGuideKeywordPage />;
}
