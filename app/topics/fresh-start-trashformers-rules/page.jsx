import FreshStartTrashformersRulesKeywordPage, { generateMetadata } from './fresh-start-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTrashformersRulesKeywordPage />;
}
