import Kasteria14BaiakServerKeywordPage, { generateMetadata } from './kasteria-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14BaiakServerKeywordPage />;
}
