import TopBlazeraForumKeywordPage, { generateMetadata } from './top-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraForumKeywordPage />;
}
