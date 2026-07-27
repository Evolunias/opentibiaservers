import PopularAureraGlobalForumKeywordPage, { generateMetadata } from './popular-aurera-global-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalForumKeywordPage />;
}
