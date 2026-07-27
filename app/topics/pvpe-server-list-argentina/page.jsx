import PvpeServerListArgentinaKeywordPage, { generateMetadata } from './pvpe-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListArgentinaKeywordPage />;
}
