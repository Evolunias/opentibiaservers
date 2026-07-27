import PvpServerListArgentinaKeywordPage, { generateMetadata } from './pvp-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListArgentinaKeywordPage />;
}
