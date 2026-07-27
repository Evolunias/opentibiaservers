import BaiakIlusionSwedenServersKeywordPage, { generateMetadata } from './baiak-ilusion-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionSwedenServersKeywordPage />;
}
