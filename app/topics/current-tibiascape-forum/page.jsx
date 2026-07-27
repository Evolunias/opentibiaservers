import CurrentTibiascapeForumKeywordPage, { generateMetadata } from './current-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeForumKeywordPage />;
}
