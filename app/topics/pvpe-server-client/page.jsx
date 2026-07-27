import PvpeServerClientKeywordPage, { generateMetadata } from './pvpe-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerClientKeywordPage />;
}
