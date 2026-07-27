import OldSchoolEvoluniaServerKeywordPage, { generateMetadata } from './old-school-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaServerKeywordPage />;
}
