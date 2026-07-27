import CanobPvpeServerNorthAmericaKeywordPage, { generateMetadata } from './canob-pvpe-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpeServerNorthAmericaKeywordPage />;
}
