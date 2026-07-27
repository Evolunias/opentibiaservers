import Tibia96EvoWikiKeywordPage, { generateMetadata } from './tibia-9-6-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96EvoWikiKeywordPage />;
}
