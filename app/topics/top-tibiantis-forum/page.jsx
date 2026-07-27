import TopTibiantisForumKeywordPage, { generateMetadata } from './top-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisForumKeywordPage />;
}
