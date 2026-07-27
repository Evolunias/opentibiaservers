import PvpEnforcedServerListMexicoKeywordPage, { generateMetadata } from './pvp-enforced-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListMexicoKeywordPage />;
}
