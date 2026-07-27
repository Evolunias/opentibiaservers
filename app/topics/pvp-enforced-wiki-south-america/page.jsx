import PvpEnforcedWikiSouthAmericaKeywordPage, { generateMetadata } from './pvp-enforced-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiSouthAmericaKeywordPage />;
}
