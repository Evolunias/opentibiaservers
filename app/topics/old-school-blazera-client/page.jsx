import OldSchoolBlazeraClientKeywordPage, { generateMetadata } from './old-school-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraClientKeywordPage />;
}
