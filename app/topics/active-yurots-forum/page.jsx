import ActiveYurotsForumKeywordPage, { generateMetadata } from './active-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsForumKeywordPage />;
}
