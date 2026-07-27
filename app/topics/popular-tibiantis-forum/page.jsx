import PopularTibiantisForumKeywordPage, { generateMetadata } from './popular-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisForumKeywordPage />;
}
