import PvpeForumCanadaKeywordPage, { generateMetadata } from './pvpe-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumCanadaKeywordPage />;
}
