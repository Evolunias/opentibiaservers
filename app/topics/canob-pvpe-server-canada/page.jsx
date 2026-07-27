import CanobPvpeServerCanadaKeywordPage, { generateMetadata } from './canob-pvpe-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpeServerCanadaKeywordPage />;
}
