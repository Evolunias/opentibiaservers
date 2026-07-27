import NoResetYurotsForumKeywordPage, { generateMetadata } from './no-reset-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsForumKeywordPage />;
}
