import NewSeasonTrashformersRulesKeywordPage, { generateMetadata } from './new-season-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTrashformersRulesKeywordPage />;
}
