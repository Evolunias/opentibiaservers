import Blazera15BaiakServerKeywordPage, { generateMetadata } from './blazera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15BaiakServerKeywordPage />;
}
