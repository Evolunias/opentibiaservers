import OldSchoolZuneraOtWebsiteKeywordPage, { generateMetadata } from './old-school-zunera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtWebsiteKeywordPage />;
}
