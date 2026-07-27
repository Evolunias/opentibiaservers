import CurrentTrashformersServerKeywordPage, { generateMetadata } from './current-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersServerKeywordPage />;
}
