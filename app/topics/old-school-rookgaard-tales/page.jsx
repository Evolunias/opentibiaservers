import OldSchoolRookgaardTalesKeywordPage, { generateMetadata } from './old-school-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesKeywordPage />;
}
