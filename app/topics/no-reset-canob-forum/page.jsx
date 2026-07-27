import NoResetCanobForumKeywordPage, { generateMetadata } from './no-reset-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobForumKeywordPage />;
}
