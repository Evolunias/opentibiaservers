import TrashformersEventsKeywordPage, { generateMetadata } from './trashformers-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersEventsKeywordPage />;
}
