import CurrentTrashformersLoginKeywordPage, { generateMetadata } from './current-trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersLoginKeywordPage />;
}
