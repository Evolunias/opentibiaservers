import ActiveEmpirebrForumKeywordPage, { generateMetadata } from './active-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrForumKeywordPage />;
}
