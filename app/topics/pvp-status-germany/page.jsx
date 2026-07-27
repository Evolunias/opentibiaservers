import PvpStatusGermanyKeywordPage, { generateMetadata } from './pvp-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusGermanyKeywordPage />;
}
