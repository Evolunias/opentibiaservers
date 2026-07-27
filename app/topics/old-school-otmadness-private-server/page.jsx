import OldSchoolOtmadnessPrivateServerKeywordPage, { generateMetadata } from './old-school-otmadness-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessPrivateServerKeywordPage />;
}
