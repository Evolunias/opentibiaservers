import OldSchoolRookgaardTalesOpenTibiaKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesOpenTibiaKeywordPage />;
}
