import LowrateTibiascapeForumKeywordPage, { generateMetadata } from './lowrate-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeForumKeywordPage />;
}
