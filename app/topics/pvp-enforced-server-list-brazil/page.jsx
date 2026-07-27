import PvpEnforcedServerListBrazilKeywordPage, { generateMetadata } from './pvp-enforced-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListBrazilKeywordPage />;
}
