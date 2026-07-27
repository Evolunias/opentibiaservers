import BaiakCanobServerKeywordPage, { generateMetadata } from './baiak-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakCanobServerKeywordPage />;
}
