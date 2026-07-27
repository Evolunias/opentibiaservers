import LowExpForumLatinAmericaKeywordPage, { generateMetadata } from './low-exp-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumLatinAmericaKeywordPage />;
}
