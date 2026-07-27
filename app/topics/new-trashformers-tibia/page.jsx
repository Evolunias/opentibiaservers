import NewTrashformersTibiaKeywordPage, { generateMetadata } from './new-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersTibiaKeywordPage />;
}
