import PvpeServerActiveKeywordPage, { generateMetadata } from './pvpe-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerActiveKeywordPage />;
}
