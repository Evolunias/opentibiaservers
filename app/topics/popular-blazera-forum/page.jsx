import PopularBlazeraForumKeywordPage, { generateMetadata } from './popular-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraForumKeywordPage />;
}
