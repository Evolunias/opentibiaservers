import CanobPvpeServerPolandKeywordPage, { generateMetadata } from './canob-pvpe-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpeServerPolandKeywordPage />;
}
