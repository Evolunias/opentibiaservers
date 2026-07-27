import ActiveAlasteraForumKeywordPage, { generateMetadata } from './active-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraForumKeywordPage />;
}
