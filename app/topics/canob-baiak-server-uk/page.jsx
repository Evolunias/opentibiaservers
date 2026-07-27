import CanobBaiakServerUkKeywordPage, { generateMetadata } from './canob-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBaiakServerUkKeywordPage />;
}
