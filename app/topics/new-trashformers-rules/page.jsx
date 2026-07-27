import NewTrashformersRulesKeywordPage, { generateMetadata } from './new-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersRulesKeywordPage />;
}
