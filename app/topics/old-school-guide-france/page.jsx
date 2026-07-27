import OldSchoolGuideFranceKeywordPage, { generateMetadata } from './old-school-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideFranceKeywordPage />;
}
