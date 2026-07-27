import MarolaotForumKeywordPage, { generateMetadata } from './marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotForumKeywordPage />;
}
