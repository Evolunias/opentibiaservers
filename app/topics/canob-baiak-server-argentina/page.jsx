import CanobBaiakServerArgentinaKeywordPage, { generateMetadata } from './canob-baiak-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBaiakServerArgentinaKeywordPage />;
}
