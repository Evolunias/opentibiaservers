import ActiveRealestaForumKeywordPage, { generateMetadata } from './active-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaForumKeywordPage />;
}
