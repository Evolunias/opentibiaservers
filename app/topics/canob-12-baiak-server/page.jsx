import Canob12BaiakServerKeywordPage, { generateMetadata } from './canob-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12BaiakServerKeywordPage />;
}
