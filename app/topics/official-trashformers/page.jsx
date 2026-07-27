import OfficialTrashformersKeywordPage, { generateMetadata } from './official-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersKeywordPage />;
}
