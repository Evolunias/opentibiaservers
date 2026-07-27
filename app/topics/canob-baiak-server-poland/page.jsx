import CanobBaiakServerPolandKeywordPage, { generateMetadata } from './canob-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBaiakServerPolandKeywordPage />;
}
