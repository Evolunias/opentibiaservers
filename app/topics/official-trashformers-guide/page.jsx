import OfficialTrashformersGuideKeywordPage, { generateMetadata } from './official-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersGuideKeywordPage />;
}
