import PopularTrashformersOtKeywordPage, { generateMetadata } from './popular-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersOtKeywordPage />;
}
