import HighrateTibiascapeForumKeywordPage, { generateMetadata } from './highrate-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeForumKeywordPage />;
}
