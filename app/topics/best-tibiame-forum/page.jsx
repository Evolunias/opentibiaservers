import BestTibiameForumKeywordPage, { generateMetadata } from './best-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameForumKeywordPage />;
}
