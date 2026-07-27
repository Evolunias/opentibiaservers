import NoResetKasteriaForumKeywordPage, { generateMetadata } from './no-reset-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaForumKeywordPage />;
}
