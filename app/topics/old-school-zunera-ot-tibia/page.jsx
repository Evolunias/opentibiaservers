import OldSchoolZuneraOtTibiaKeywordPage, { generateMetadata } from './old-school-zunera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtTibiaKeywordPage />;
}
