import LowrateTibianusForumKeywordPage, { generateMetadata } from './lowrate-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusForumKeywordPage />;
}
