import PopularNoxiousotForumKeywordPage, { generateMetadata } from './popular-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotForumKeywordPage />;
}
