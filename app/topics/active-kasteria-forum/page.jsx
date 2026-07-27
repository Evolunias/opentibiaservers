import ActiveKasteriaForumKeywordPage, { generateMetadata } from './active-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaForumKeywordPage />;
}
