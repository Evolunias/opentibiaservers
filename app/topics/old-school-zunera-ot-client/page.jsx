import OldSchoolZuneraOtClientKeywordPage, { generateMetadata } from './old-school-zunera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtClientKeywordPage />;
}
