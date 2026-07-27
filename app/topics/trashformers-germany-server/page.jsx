import TrashformersGermanyServerKeywordPage, { generateMetadata } from './trashformers-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersGermanyServerKeywordPage />;
}
