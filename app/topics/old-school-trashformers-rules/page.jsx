import OldSchoolTrashformersRulesKeywordPage, { generateMetadata } from './old-school-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersRulesKeywordPage />;
}
