import Blazera14BaiakServerKeywordPage, { generateMetadata } from './blazera-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14BaiakServerKeywordPage />;
}
