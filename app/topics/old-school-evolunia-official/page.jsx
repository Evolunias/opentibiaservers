import OldSchoolEvoluniaOfficialKeywordPage, { generateMetadata } from './old-school-evolunia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaOfficialKeywordPage />;
}
