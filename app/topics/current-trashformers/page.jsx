import CurrentTrashformersKeywordPage, { generateMetadata } from './current-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersKeywordPage />;
}
