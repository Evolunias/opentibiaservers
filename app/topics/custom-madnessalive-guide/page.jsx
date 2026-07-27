import CustomMadnessaliveGuideKeywordPage, { generateMetadata } from './custom-madnessalive-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveGuideKeywordPage />;
}
