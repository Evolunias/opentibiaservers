import CanobWarsKeywordPage, { generateMetadata } from './canob-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWarsKeywordPage />;
}
