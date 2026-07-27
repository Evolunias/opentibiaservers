import OldSchoolZuneraOtGuideKeywordPage, { generateMetadata } from './old-school-zunera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtGuideKeywordPage />;
}
