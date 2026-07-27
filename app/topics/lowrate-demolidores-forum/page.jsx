import LowrateDemolidoresForumKeywordPage, { generateMetadata } from './lowrate-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDemolidoresForumKeywordPage />;
}
