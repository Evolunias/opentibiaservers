import OfficialInfernalOtWikiKeywordPage, { generateMetadata } from './official-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialInfernalOtWikiKeywordPage />;
}
