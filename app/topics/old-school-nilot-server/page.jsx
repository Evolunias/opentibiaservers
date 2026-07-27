import OldSchoolNilotServerKeywordPage, { generateMetadata } from './old-school-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotServerKeywordPage />;
}
