import PopularTrashformersRulesKeywordPage, { generateMetadata } from './popular-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersRulesKeywordPage />;
}
