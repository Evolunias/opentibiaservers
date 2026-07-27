import CustomEternalOdysseyGuideKeywordPage, { generateMetadata } from './custom-eternal-odyssey-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyGuideKeywordPage />;
}
