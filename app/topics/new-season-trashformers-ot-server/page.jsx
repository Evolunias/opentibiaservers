import NewSeasonTrashformersOtServerKeywordPage, { generateMetadata } from './new-season-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTrashformersOtServerKeywordPage />;
}
