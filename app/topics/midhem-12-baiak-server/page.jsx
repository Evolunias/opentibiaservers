import Midhem12BaiakServerKeywordPage, { generateMetadata } from './midhem-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12BaiakServerKeywordPage />;
}
