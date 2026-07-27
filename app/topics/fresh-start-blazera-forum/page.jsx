import FreshStartBlazeraForumKeywordPage, { generateMetadata } from './fresh-start-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraForumKeywordPage />;
}
