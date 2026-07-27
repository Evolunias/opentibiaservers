import ActiveTrashformersServerKeywordPage, { generateMetadata } from './active-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersServerKeywordPage />;
}
