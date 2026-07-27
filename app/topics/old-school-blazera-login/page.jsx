import OldSchoolBlazeraLoginKeywordPage, { generateMetadata } from './old-school-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraLoginKeywordPage />;
}
