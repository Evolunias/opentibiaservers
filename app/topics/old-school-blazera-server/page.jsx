import OldSchoolBlazeraServerKeywordPage, { generateMetadata } from './old-school-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraServerKeywordPage />;
}
