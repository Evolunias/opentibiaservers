import CurrentTrashformersOpenTibiaKeywordPage, { generateMetadata } from './current-trashformers-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersOpenTibiaKeywordPage />;
}
