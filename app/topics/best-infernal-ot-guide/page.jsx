import BestInfernalOtGuideKeywordPage, { generateMetadata } from './best-infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestInfernalOtGuideKeywordPage />;
}
