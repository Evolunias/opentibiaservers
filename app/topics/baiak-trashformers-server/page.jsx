import BaiakTrashformersServerKeywordPage, { generateMetadata } from './baiak-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTrashformersServerKeywordPage />;
}
