import TrashformersLoginKeywordPage, { generateMetadata } from './trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersLoginKeywordPage />;
}
