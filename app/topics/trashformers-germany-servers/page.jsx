import TrashformersGermanyServersKeywordPage, { generateMetadata } from './trashformers-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersGermanyServersKeywordPage />;
}
