import PvpEnforcedClientFranceKeywordPage, { generateMetadata } from './pvp-enforced-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientFranceKeywordPage />;
}
