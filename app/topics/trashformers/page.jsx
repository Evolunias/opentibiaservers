import TrashformersKeywordPage, { generateMetadata } from './trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersKeywordPage />;
}
