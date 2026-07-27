import NonPvpStatusSwedenKeywordPage, { generateMetadata } from './non-pvp-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusSwedenKeywordPage />;
}
