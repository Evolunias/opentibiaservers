import NilotOldSchoolServerPolandKeywordPage, { generateMetadata } from './nilot-old-school-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotOldSchoolServerPolandKeywordPage />;
}
