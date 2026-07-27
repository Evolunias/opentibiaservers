import CanobSwedenServersKeywordPage, { generateMetadata } from './canob-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSwedenServersKeywordPage />;
}
