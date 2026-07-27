import Trashformers11BaiakServerKeywordPage, { generateMetadata } from './trashformers-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11BaiakServerKeywordPage />;
}
