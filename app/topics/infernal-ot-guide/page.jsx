import InfernalOtGuideKeywordPage, { generateMetadata } from './infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtGuideKeywordPage />;
}
