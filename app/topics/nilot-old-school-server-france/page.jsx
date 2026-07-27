import NilotOldSchoolServerFranceKeywordPage, { generateMetadata } from './nilot-old-school-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotOldSchoolServerFranceKeywordPage />;
}
