import CustomTrashformersRulesKeywordPage, { generateMetadata } from './custom-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersRulesKeywordPage />;
}
