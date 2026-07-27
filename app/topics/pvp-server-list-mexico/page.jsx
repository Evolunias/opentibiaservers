import PvpServerListMexicoKeywordPage, { generateMetadata } from './pvp-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListMexicoKeywordPage />;
}
