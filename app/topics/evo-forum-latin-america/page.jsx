import EvoForumLatinAmericaKeywordPage, { generateMetadata } from './evo-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumLatinAmericaKeywordPage />;
}
