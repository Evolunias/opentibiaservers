import NoResetThorniaForumKeywordPage, { generateMetadata } from './no-reset-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaForumKeywordPage />;
}
