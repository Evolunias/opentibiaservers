import PvpServerListUkKeywordPage, { generateMetadata } from './pvp-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServerListUkKeywordPage />;
}
