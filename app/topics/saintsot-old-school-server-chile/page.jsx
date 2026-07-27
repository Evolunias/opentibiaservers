import SaintsotOldSchoolServerChileKeywordPage, { generateMetadata } from './saintsot-old-school-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotOldSchoolServerChileKeywordPage />;
}
