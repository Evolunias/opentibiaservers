import OfficialInfernalOtGuideKeywordPage, { generateMetadata } from './official-infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialInfernalOtGuideKeywordPage />;
}
