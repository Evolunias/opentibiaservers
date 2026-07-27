import TrashformersPrivateServerKeywordPage, { generateMetadata } from './trashformers-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersPrivateServerKeywordPage />;
}
