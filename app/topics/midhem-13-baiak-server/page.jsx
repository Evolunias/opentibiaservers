import Midhem13BaiakServerKeywordPage, { generateMetadata } from './midhem-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13BaiakServerKeywordPage />;
}
