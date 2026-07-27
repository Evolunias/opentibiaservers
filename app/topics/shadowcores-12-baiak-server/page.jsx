import Shadowcores12BaiakServerKeywordPage, { generateMetadata } from './shadowcores-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12BaiakServerKeywordPage />;
}
