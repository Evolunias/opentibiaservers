import TrashformersWarsKeywordPage, { generateMetadata } from './trashformers-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersWarsKeywordPage />;
}
