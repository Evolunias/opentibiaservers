import LowrateTibijkaForumKeywordPage, { generateMetadata } from './lowrate-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaForumKeywordPage />;
}
