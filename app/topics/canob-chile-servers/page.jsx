import CanobChileServersKeywordPage, { generateMetadata } from './canob-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobChileServersKeywordPage />;
}
