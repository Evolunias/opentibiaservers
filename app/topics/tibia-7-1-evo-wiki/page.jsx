import Tibia71EvoWikiKeywordPage, { generateMetadata } from './tibia-7-1-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71EvoWikiKeywordPage />;
}
