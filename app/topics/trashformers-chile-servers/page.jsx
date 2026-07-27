import TrashformersChileServersKeywordPage, { generateMetadata } from './trashformers-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersChileServersKeywordPage />;
}
