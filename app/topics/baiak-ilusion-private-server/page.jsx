import BaiakIlusionPrivateServerKeywordPage, { generateMetadata } from './baiak-ilusion-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionPrivateServerKeywordPage />;
}
