import TrashformersHighExpKeywordPage, { generateMetadata } from './trashformers-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersHighExpKeywordPage />;
}
