import OldSchoolRookgaardTalesOtServerKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesOtServerKeywordPage />;
}
