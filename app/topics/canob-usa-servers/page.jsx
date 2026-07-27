import CanobUsaServersKeywordPage, { generateMetadata } from './canob-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobUsaServersKeywordPage />;
}
