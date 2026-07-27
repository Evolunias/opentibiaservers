import OldSchoolEvoluniaGuideKeywordPage, { generateMetadata } from './old-school-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaGuideKeywordPage />;
}
