import CurrentNoxiousotForumKeywordPage, { generateMetadata } from './current-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotForumKeywordPage />;
}
