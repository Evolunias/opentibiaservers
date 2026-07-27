import Blazera13BaiakServerKeywordPage, { generateMetadata } from './blazera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13BaiakServerKeywordPage />;
}
