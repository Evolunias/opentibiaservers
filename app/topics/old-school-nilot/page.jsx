import OldSchoolNilotKeywordPage, { generateMetadata } from './old-school-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotKeywordPage />;
}
