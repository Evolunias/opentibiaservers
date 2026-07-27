import OldSchoolRookgaardTalesServerKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesServerKeywordPage />;
}
