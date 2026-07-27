import ActiveTrashformersOtKeywordPage, { generateMetadata } from './active-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersOtKeywordPage />;
}
