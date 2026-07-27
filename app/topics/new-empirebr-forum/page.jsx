import NewEmpirebrForumKeywordPage, { generateMetadata } from './new-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrForumKeywordPage />;
}
