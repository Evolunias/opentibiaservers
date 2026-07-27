import CanobMapKeywordPage, { generateMetadata } from './canob-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobMapKeywordPage />;
}
