import PvpEnforcedVenoreotServerKeywordPage, { generateMetadata } from './pvp-enforced-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedVenoreotServerKeywordPage />;
}
