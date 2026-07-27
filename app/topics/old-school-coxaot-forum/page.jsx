import OldSchoolCoxaotForumKeywordPage, { generateMetadata } from './old-school-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotForumKeywordPage />;
}
