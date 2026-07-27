import CanobPolandServersKeywordPage, { generateMetadata } from './canob-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPolandServersKeywordPage />;
}
