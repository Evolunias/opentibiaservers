import Evolera13BaiakServerKeywordPage, { generateMetadata } from './evolera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera13BaiakServerKeywordPage />;
}
