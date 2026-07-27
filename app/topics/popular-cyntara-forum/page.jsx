import PopularCyntaraForumKeywordPage, { generateMetadata } from './popular-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraForumKeywordPage />;
}
