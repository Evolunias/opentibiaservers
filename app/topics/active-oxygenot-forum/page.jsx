import ActiveOxygenotForumKeywordPage, { generateMetadata } from './active-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotForumKeywordPage />;
}
