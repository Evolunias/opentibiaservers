import TrashformersUkServerKeywordPage, { generateMetadata } from './trashformers-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersUkServerKeywordPage />;
}
