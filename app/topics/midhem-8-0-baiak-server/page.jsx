import Midhem80BaiakServerKeywordPage, { generateMetadata } from './midhem-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80BaiakServerKeywordPage />;
}
