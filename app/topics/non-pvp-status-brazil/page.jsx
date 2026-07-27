import NonPvpStatusBrazilKeywordPage, { generateMetadata } from './non-pvp-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusBrazilKeywordPage />;
}
