import OldSchoolEvoluniaOtKeywordPage, { generateMetadata } from './old-school-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaOtKeywordPage />;
}
