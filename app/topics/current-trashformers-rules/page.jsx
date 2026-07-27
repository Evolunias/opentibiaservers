import CurrentTrashformersRulesKeywordPage, { generateMetadata } from './current-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersRulesKeywordPage />;
}
