import NoResetEmpirebrForumKeywordPage, { generateMetadata } from './no-reset-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEmpirebrForumKeywordPage />;
}
