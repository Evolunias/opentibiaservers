import BaiakIlusionUsaServerKeywordPage, { generateMetadata } from './baiak-ilusion-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionUsaServerKeywordPage />;
}
