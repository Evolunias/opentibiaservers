import NostaltherOldSchoolServerChileKeywordPage, { generateMetadata } from './nostalther-old-school-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherOldSchoolServerChileKeywordPage />;
}
