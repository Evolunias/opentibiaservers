import TibianusForumKeywordPage, { generateMetadata } from './tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusForumKeywordPage />;
}
