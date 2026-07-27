import PvpeForumLatinAmericaKeywordPage, { generateMetadata } from './pvpe-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumLatinAmericaKeywordPage />;
}
