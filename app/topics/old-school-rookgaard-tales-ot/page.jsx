import OldSchoolRookgaardTalesOtKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesOtKeywordPage />;
}
