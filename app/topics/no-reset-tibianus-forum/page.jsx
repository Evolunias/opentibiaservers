import NoResetTibianusForumKeywordPage, { generateMetadata } from './no-reset-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusForumKeywordPage />;
}
