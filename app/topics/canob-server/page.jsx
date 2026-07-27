import CanobServerKeywordPage, { generateMetadata } from './canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobServerKeywordPage />;
}
