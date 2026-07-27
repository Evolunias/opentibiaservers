import OldSchoolRookgaardTalesForumKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesForumKeywordPage />;
}
