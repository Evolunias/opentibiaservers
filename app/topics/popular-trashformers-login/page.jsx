import PopularTrashformersLoginKeywordPage, { generateMetadata } from './popular-trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersLoginKeywordPage />;
}
