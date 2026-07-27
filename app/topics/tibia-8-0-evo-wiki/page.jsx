import Tibia80EvoWikiKeywordPage, { generateMetadata } from './tibia-8-0-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoWikiKeywordPage />;
}
