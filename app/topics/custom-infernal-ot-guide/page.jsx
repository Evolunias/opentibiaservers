import CustomInfernalOtGuideKeywordPage, { generateMetadata } from './custom-infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtGuideKeywordPage />;
}
