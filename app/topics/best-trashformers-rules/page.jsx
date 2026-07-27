import BestTrashformersRulesKeywordPage, { generateMetadata } from './best-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersRulesKeywordPage />;
}
