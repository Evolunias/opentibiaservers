import ArchlightVipKeywordPage, { generateMetadata } from './archlight-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightVipKeywordPage />;
}
