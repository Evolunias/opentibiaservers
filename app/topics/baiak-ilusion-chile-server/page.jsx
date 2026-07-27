import BaiakIlusionChileServerKeywordPage, { generateMetadata } from './baiak-ilusion-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionChileServerKeywordPage />;
}
