import NewNoxiousotForumKeywordPage, { generateMetadata } from './new-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNoxiousotForumKeywordPage />;
}
