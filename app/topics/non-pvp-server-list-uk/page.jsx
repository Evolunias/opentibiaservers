import NonPvpServerListUkKeywordPage, { generateMetadata } from './non-pvp-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListUkKeywordPage />;
}
