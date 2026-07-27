import CanobBaiakServerMexicoKeywordPage, { generateMetadata } from './canob-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBaiakServerMexicoKeywordPage />;
}
