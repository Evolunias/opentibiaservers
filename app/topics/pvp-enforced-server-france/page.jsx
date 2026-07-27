import PvpEnforcedServerFranceKeywordPage, { generateMetadata } from './pvp-enforced-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerFranceKeywordPage />;
}
