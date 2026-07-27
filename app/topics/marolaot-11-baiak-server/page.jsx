import Marolaot11BaiakServerKeywordPage, { generateMetadata } from './marolaot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11BaiakServerKeywordPage />;
}
