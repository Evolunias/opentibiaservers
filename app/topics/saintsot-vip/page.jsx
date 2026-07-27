import SaintsotVipKeywordPage, { generateMetadata } from './saintsot-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotVipKeywordPage />;
}
