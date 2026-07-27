import PvpEnforcedStatusBrazilKeywordPage, { generateMetadata } from './pvp-enforced-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusBrazilKeywordPage />;
}
