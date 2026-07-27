import CustomEmpirebrForumKeywordPage, { generateMetadata } from './custom-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrForumKeywordPage />;
}
