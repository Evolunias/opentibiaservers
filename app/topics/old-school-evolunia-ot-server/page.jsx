import OldSchoolEvoluniaOtServerKeywordPage, { generateMetadata } from './old-school-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaOtServerKeywordPage />;
}
