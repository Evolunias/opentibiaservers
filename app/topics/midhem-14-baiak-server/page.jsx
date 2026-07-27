import Midhem14BaiakServerKeywordPage, { generateMetadata } from './midhem-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14BaiakServerKeywordPage />;
}
