import PvpEnforcedStatusArgentinaKeywordPage, { generateMetadata } from './pvp-enforced-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusArgentinaKeywordPage />;
}
