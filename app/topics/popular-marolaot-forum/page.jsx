import PopularMarolaotForumKeywordPage, { generateMetadata } from './popular-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotForumKeywordPage />;
}
