import PvpeForumUsaKeywordPage, { generateMetadata } from './pvpe-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumUsaKeywordPage />;
}
