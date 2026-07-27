import TopInfernalOtGuideKeywordPage, { generateMetadata } from './top-infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtGuideKeywordPage />;
}
