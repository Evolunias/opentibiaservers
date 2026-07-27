import NoResetNilotForumKeywordPage, { generateMetadata } from './no-reset-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotForumKeywordPage />;
}
