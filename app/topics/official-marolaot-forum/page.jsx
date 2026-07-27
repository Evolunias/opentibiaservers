import OfficialMarolaotForumKeywordPage, { generateMetadata } from './official-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotForumKeywordPage />;
}
