import Midhem81BaiakServerKeywordPage, { generateMetadata } from './midhem-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81BaiakServerKeywordPage />;
}
