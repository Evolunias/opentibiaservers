import TrashformersSpellsKeywordPage, { generateMetadata } from './trashformers-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersSpellsKeywordPage />;
}
