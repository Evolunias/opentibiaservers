import NewInfernalOtGuideKeywordPage, { generateMetadata } from './new-infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtGuideKeywordPage />;
}
