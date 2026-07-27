import OldSchoolEvoluniaLoginKeywordPage, { generateMetadata } from './old-school-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaLoginKeywordPage />;
}
