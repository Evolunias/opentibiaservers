import OldSchoolGuideMexicoKeywordPage, { generateMetadata } from './old-school-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideMexicoKeywordPage />;
}
