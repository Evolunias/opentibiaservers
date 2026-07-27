import NoResetArchlightForumKeywordPage, { generateMetadata } from './no-reset-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightForumKeywordPage />;
}
