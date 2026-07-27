import OfficialEmpirebrForumKeywordPage, { generateMetadata } from './official-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrForumKeywordPage />;
}
