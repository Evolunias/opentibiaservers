import TrashformersPolandServerKeywordPage, { generateMetadata } from './trashformers-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersPolandServerKeywordPage />;
}
