import ArcaniarlOldSchoolServerChileKeywordPage, { generateMetadata } from './arcaniarl-old-school-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlOldSchoolServerChileKeywordPage />;
}
