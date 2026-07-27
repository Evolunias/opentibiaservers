import PvpEnforcedWikiNorthAmericaKeywordPage, { generateMetadata } from './pvp-enforced-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiNorthAmericaKeywordPage />;
}
