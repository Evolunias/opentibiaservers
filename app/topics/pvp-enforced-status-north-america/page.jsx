import PvpEnforcedStatusNorthAmericaKeywordPage, { generateMetadata } from './pvp-enforced-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusNorthAmericaKeywordPage />;
}
