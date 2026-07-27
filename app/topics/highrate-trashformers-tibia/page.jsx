import HighrateTrashformersTibiaKeywordPage, { generateMetadata } from './highrate-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersTibiaKeywordPage />;
}
