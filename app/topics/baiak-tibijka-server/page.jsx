import BaiakTibijkaServerKeywordPage, { generateMetadata } from './baiak-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibijkaServerKeywordPage />;
}
