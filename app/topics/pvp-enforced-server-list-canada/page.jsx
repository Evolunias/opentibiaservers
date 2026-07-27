import PvpEnforcedServerListCanadaKeywordPage, { generateMetadata } from './pvp-enforced-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListCanadaKeywordPage />;
}
