import BaiakOtServerGermanyKeywordPage, { generateMetadata } from './baiak-ot-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOtServerGermanyKeywordPage />;
}
