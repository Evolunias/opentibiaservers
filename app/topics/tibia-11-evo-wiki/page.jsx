import Tibia11EvoWikiKeywordPage, { generateMetadata } from './tibia-11-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoWikiKeywordPage />;
}
