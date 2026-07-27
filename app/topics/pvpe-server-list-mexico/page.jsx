import PvpeServerListMexicoKeywordPage, { generateMetadata } from './pvpe-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListMexicoKeywordPage />;
}
