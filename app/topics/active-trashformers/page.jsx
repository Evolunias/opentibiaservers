import ActiveTrashformersKeywordPage, { generateMetadata } from './active-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersKeywordPage />;
}
