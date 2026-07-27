import Canob15BaiakServerKeywordPage, { generateMetadata } from './canob-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15BaiakServerKeywordPage />;
}
