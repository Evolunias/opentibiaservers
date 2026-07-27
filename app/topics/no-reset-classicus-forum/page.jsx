import NoResetClassicusForumKeywordPage, { generateMetadata } from './no-reset-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusForumKeywordPage />;
}
