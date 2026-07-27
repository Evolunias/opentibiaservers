import Trashformers13BaiakServerKeywordPage, { generateMetadata } from './trashformers-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13BaiakServerKeywordPage />;
}
