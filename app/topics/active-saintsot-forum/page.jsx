import ActiveSaintsotForumKeywordPage, { generateMetadata } from './active-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotForumKeywordPage />;
}
