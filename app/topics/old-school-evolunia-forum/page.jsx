import OldSchoolEvoluniaForumKeywordPage, { generateMetadata } from './old-school-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaForumKeywordPage />;
}
