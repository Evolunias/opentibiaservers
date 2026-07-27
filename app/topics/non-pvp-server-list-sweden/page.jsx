import NonPvpServerListSwedenKeywordPage, { generateMetadata } from './non-pvp-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListSwedenKeywordPage />;
}
