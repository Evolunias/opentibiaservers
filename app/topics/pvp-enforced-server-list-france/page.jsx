import PvpEnforcedServerListFranceKeywordPage, { generateMetadata } from './pvp-enforced-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerListFranceKeywordPage />;
}
