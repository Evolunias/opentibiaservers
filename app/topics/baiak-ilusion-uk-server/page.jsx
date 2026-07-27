import BaiakIlusionUkServerKeywordPage, { generateMetadata } from './baiak-ilusion-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionUkServerKeywordPage />;
}
