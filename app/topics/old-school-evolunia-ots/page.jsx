import OldSchoolEvoluniaOtsKeywordPage, { generateMetadata } from './old-school-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaOtsKeywordPage />;
}
