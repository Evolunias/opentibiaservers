import BestEmpirebrForumKeywordPage, { generateMetadata } from './best-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrForumKeywordPage />;
}
