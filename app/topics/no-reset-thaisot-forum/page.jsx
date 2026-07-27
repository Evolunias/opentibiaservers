import NoResetThaisotForumKeywordPage, { generateMetadata } from './no-reset-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotForumKeywordPage />;
}
