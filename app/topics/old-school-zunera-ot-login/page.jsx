import OldSchoolZuneraOtLoginKeywordPage, { generateMetadata } from './old-school-zunera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtLoginKeywordPage />;
}
