import CustomMarolaotForumKeywordPage, { generateMetadata } from './custom-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotForumKeywordPage />;
}
