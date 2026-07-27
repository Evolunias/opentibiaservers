import ActiveTibiascapeForumKeywordPage, { generateMetadata } from './active-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeForumKeywordPage />;
}
