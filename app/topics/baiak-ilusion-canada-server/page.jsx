import BaiakIlusionCanadaServerKeywordPage, { generateMetadata } from './baiak-ilusion-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionCanadaServerKeywordPage />;
}
