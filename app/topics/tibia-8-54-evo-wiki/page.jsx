import Tibia854EvoWikiKeywordPage, { generateMetadata } from './tibia-8-54-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854EvoWikiKeywordPage />;
}
