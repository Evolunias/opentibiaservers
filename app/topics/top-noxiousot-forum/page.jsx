import TopNoxiousotForumKeywordPage, { generateMetadata } from './top-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotForumKeywordPage />;
}
