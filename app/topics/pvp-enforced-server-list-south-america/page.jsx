import PvpEnforcedServerListSouthAmericaKeywordPage, { generateMetadata } from './pvp-enforced-server-list-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListSouthAmericaKeywordPage />;
}
