import PvpStatusSwedenKeywordPage, { generateMetadata } from './pvp-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusSwedenKeywordPage />;
}
