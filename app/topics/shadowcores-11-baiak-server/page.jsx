import Shadowcores11BaiakServerKeywordPage, { generateMetadata } from './shadowcores-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11BaiakServerKeywordPage />;
}
