import HighrateMarolaotForumKeywordPage, { generateMetadata } from './highrate-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotForumKeywordPage />;
}
