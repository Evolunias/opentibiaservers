import NonPvpServerListGermanyKeywordPage, { generateMetadata } from './non-pvp-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListGermanyKeywordPage />;
}
