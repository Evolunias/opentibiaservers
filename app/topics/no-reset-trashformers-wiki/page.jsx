import NoResetTrashformersWikiKeywordPage, { generateMetadata } from './no-reset-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTrashformersWikiKeywordPage />;
}
