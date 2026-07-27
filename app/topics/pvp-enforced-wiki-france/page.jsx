import PvpEnforcedWikiFranceKeywordPage, { generateMetadata } from './pvp-enforced-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiFranceKeywordPage />;
}
