import HighrateTrashformersRulesKeywordPage, { generateMetadata } from './highrate-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersRulesKeywordPage />;
}
