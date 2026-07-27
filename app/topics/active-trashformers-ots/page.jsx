import ActiveTrashformersOtsKeywordPage, { generateMetadata } from './active-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersOtsKeywordPage />;
}
