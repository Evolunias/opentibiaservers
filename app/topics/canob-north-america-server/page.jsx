import CanobNorthAmericaServerKeywordPage, { generateMetadata } from './canob-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobNorthAmericaServerKeywordPage />;
}
