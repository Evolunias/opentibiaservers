import NonPvpServerListArgentinaKeywordPage, { generateMetadata } from './non-pvp-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListArgentinaKeywordPage />;
}
