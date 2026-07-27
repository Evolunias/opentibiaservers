import CustomRubinotGuideKeywordPage, { generateMetadata } from './custom-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotGuideKeywordPage />;
}
