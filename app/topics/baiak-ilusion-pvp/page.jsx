import BaiakIlusionPvpKeywordPage, { generateMetadata } from './baiak-ilusion-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionPvpKeywordPage />;
}
