import OfficialTrashformersClientKeywordPage, { generateMetadata } from './official-trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersClientKeywordPage />;
}
