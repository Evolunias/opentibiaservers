import Canob13BaiakServerKeywordPage, { generateMetadata } from './canob-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13BaiakServerKeywordPage />;
}
