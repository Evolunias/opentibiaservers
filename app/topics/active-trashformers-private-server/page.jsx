import ActiveTrashformersPrivateServerKeywordPage, { generateMetadata } from './active-trashformers-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersPrivateServerKeywordPage />;
}
