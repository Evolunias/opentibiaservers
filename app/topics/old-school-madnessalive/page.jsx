import OldSchoolMadnessaliveKeywordPage, { generateMetadata } from './old-school-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveKeywordPage />;
}
