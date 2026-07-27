import Miracle14BaiakServerKeywordPage, { generateMetadata } from './miracle-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14BaiakServerKeywordPage />;
}
