import LowrateTibiantisForumKeywordPage, { generateMetadata } from './lowrate-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisForumKeywordPage />;
}
