import PvpServerListSwedenKeywordPage, { generateMetadata } from './pvp-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListSwedenKeywordPage />;
}
