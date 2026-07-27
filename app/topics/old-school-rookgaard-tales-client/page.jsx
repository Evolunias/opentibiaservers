import OldSchoolRookgaardTalesClientKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesClientKeywordPage />;
}
