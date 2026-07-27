import ElderaOldSchoolServerChileKeywordPage, { generateMetadata } from './eldera-old-school-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaOldSchoolServerChileKeywordPage />;
}
