import PvpeServerListKeywordPage, { generateMetadata } from './pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListKeywordPage />;
}
