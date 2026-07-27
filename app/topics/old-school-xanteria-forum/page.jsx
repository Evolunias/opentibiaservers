import OldSchoolXanteriaForumKeywordPage, { generateMetadata } from './old-school-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaForumKeywordPage />;
}
