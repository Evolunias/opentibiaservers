import PvpEnforcedServersGermanyKeywordPage, { generateMetadata } from './pvp-enforced-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersGermanyKeywordPage />;
}
