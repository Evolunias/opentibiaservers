import PvpEnforcedServerListUsaKeywordPage, { generateMetadata } from './pvp-enforced-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListUsaKeywordPage />;
}
