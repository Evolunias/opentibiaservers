import CanobGermanyServersKeywordPage, { generateMetadata } from './canob-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobGermanyServersKeywordPage />;
}
