import PvpStatusPolandKeywordPage, { generateMetadata } from './pvp-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusPolandKeywordPage />;
}
