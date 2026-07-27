import OldSchoolEvoluniaKeywordPage, { generateMetadata } from './old-school-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaKeywordPage />;
}
