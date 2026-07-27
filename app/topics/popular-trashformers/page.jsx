import PopularTrashformersKeywordPage, { generateMetadata } from './popular-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersKeywordPage />;
}
