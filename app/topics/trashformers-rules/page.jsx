import TrashformersRulesKeywordPage, { generateMetadata } from './trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersRulesKeywordPage />;
}
