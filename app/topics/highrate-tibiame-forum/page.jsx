import HighrateTibiameForumKeywordPage, { generateMetadata } from './highrate-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameForumKeywordPage />;
}
