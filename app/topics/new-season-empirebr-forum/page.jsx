import NewSeasonEmpirebrForumKeywordPage, { generateMetadata } from './new-season-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrForumKeywordPage />;
}
