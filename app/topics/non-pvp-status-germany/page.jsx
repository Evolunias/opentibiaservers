import NonPvpStatusGermanyKeywordPage, { generateMetadata } from './non-pvp-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusGermanyKeywordPage />;
}
