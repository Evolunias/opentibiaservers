import Tibia81EvoWikiKeywordPage, { generateMetadata } from './tibia-8-1-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81EvoWikiKeywordPage />;
}
