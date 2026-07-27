import OldSchoolNilotLoginKeywordPage, { generateMetadata } from './old-school-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotLoginKeywordPage />;
}
