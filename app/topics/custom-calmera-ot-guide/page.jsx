import CustomCalmeraOtGuideKeywordPage, { generateMetadata } from './custom-calmera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCalmeraOtGuideKeywordPage />;
}
