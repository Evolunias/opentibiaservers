import NoResetTibiascapeForumKeywordPage, { generateMetadata } from './no-reset-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeForumKeywordPage />;
}
