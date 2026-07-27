import Miracle15BaiakServerKeywordPage, { generateMetadata } from './miracle-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15BaiakServerKeywordPage />;
}
