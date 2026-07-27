import OldSchoolRookgaardTalesOtsKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesOtsKeywordPage />;
}
