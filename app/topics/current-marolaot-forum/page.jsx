import CurrentMarolaotForumKeywordPage, { generateMetadata } from './current-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotForumKeywordPage />;
}
