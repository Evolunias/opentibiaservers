import LowrateNoxiousotForumKeywordPage, { generateMetadata } from './lowrate-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotForumKeywordPage />;
}
