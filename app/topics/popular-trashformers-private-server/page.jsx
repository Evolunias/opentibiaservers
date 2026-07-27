import PopularTrashformersPrivateServerKeywordPage, { generateMetadata } from './popular-trashformers-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersPrivateServerKeywordPage />;
}
