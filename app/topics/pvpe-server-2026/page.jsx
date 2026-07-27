import PvpeServer2026KeywordPage, { generateMetadata } from './pvpe-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServer2026KeywordPage />;
}
