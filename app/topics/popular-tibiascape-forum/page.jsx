import PopularTibiascapeForumKeywordPage, { generateMetadata } from './popular-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeForumKeywordPage />;
}
