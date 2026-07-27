import OldSchoolEvoleraOpenTibiaKeywordPage, { generateMetadata } from './old-school-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraOpenTibiaKeywordPage />;
}
