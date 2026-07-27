import Trashformers12BaiakServerKeywordPage, { generateMetadata } from './trashformers-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12BaiakServerKeywordPage />;
}
