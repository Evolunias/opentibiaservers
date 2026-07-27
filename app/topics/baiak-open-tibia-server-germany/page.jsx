import BaiakOpenTibiaServerGermanyKeywordPage, { generateMetadata } from './baiak-open-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerGermanyKeywordPage />;
}
