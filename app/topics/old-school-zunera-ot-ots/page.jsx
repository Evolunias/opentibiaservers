import OldSchoolZuneraOtOtsKeywordPage, { generateMetadata } from './old-school-zunera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtOtsKeywordPage />;
}
