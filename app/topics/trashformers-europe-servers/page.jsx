import TrashformersEuropeServersKeywordPage, { generateMetadata } from './trashformers-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersEuropeServersKeywordPage />;
}
