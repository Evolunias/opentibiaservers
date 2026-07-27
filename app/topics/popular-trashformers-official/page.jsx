import PopularTrashformersOfficialKeywordPage, { generateMetadata } from './popular-trashformers-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersOfficialKeywordPage />;
}
