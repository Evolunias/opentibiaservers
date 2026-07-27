import TopTrashformersRulesKeywordPage, { generateMetadata } from './top-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersRulesKeywordPage />;
}
