import PvpeServerRealMapKeywordPage, { generateMetadata } from './pvpe-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerRealMapKeywordPage />;
}
