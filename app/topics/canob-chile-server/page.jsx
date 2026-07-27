import CanobChileServerKeywordPage, { generateMetadata } from './canob-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobChileServerKeywordPage />;
}
