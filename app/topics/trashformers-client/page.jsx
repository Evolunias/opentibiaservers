import TrashformersClientKeywordPage, { generateMetadata } from './trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersClientKeywordPage />;
}
