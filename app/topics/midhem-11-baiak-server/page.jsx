import Midhem11BaiakServerKeywordPage, { generateMetadata } from './midhem-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11BaiakServerKeywordPage />;
}
