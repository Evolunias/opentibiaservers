import NonPvpServerListBrazilKeywordPage, { generateMetadata } from './non-pvp-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListBrazilKeywordPage />;
}
