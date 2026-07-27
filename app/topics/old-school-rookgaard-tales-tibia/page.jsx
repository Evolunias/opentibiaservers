import OldSchoolRookgaardTalesTibiaKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesTibiaKeywordPage />;
}
