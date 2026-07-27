import HighrateNoxiousotForumKeywordPage, { generateMetadata } from './highrate-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotForumKeywordPage />;
}
