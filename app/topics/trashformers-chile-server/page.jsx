import TrashformersChileServerKeywordPage, { generateMetadata } from './trashformers-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersChileServerKeywordPage />;
}
