import TrashformersUkServersKeywordPage, { generateMetadata } from './trashformers-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersUkServersKeywordPage />;
}
