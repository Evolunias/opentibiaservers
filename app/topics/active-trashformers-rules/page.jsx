import ActiveTrashformersRulesKeywordPage, { generateMetadata } from './active-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersRulesKeywordPage />;
}
