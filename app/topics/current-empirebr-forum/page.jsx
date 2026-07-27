import CurrentEmpirebrForumKeywordPage, { generateMetadata } from './current-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrForumKeywordPage />;
}
