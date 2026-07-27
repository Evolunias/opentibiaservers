import OldSchoolMadnessaliveOtServerKeywordPage, { generateMetadata } from './old-school-madnessalive-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveOtServerKeywordPage />;
}
