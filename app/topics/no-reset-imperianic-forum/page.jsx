import NoResetImperianicForumKeywordPage, { generateMetadata } from './no-reset-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicForumKeywordPage />;
}
