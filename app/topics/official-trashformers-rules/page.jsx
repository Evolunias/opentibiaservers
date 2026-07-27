import OfficialTrashformersRulesKeywordPage, { generateMetadata } from './official-trashformers-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersRulesKeywordPage />;
}
