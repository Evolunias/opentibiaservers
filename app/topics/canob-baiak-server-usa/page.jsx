import CanobBaiakServerUsaKeywordPage, { generateMetadata } from './canob-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBaiakServerUsaKeywordPage />;
}
