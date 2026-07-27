import KasteriaOldSchoolServerChileKeywordPage, { generateMetadata } from './kasteria-old-school-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaOldSchoolServerChileKeywordPage />;
}
