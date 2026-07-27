import PvpeServerListSouthAmericaKeywordPage, { generateMetadata } from './pvpe-server-list-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListSouthAmericaKeywordPage />;
}
