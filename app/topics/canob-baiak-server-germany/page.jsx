import CanobBaiakServerGermanyKeywordPage, { generateMetadata } from './canob-baiak-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBaiakServerGermanyKeywordPage />;
}
