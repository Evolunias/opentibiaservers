import PvpEnforcedServerListArgentinaKeywordPage, { generateMetadata } from './pvp-enforced-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListArgentinaKeywordPage />;
}
