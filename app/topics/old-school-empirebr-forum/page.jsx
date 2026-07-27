import OldSchoolEmpirebrForumKeywordPage, { generateMetadata } from './old-school-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrForumKeywordPage />;
}
