import OldSchoolEvoluniaClientKeywordPage, { generateMetadata } from './old-school-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaClientKeywordPage />;
}
