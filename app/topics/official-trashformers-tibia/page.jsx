import OfficialTrashformersTibiaKeywordPage, { generateMetadata } from './official-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersTibiaKeywordPage />;
}
