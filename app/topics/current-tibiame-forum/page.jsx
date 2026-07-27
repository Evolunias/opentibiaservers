import CurrentTibiameForumKeywordPage, { generateMetadata } from './current-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameForumKeywordPage />;
}
