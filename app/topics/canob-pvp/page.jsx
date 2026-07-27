import CanobPvpKeywordPage, { generateMetadata } from './canob-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpKeywordPage />;
}
