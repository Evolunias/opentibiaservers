import CanobPvpeServerLatinAmericaKeywordPage, { generateMetadata } from './canob-pvpe-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpeServerLatinAmericaKeywordPage />;
}
