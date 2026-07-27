import PopularTibiaraForumKeywordPage, { generateMetadata } from './popular-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraForumKeywordPage />;
}
