import OldSchoolBlazeraKeywordPage, { generateMetadata } from './old-school-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraKeywordPage />;
}
