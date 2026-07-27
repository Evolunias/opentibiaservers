import Shadowcores13BaiakServerKeywordPage, { generateMetadata } from './shadowcores-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13BaiakServerKeywordPage />;
}
