import TopTrashformersLoginKeywordPage, { generateMetadata } from './top-trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersLoginKeywordPage />;
}
