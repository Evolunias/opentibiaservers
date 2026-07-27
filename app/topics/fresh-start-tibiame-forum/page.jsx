import FreshStartTibiameForumKeywordPage, { generateMetadata } from './fresh-start-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiameForumKeywordPage />;
}
