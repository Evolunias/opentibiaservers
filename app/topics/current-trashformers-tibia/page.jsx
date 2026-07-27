import CurrentTrashformersTibiaKeywordPage, { generateMetadata } from './current-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersTibiaKeywordPage />;
}
