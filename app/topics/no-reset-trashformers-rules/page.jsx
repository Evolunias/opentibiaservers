import NoResetTrashformersRulesKeywordPage, { generateMetadata } from './no-reset-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTrashformersRulesKeywordPage />;
}
