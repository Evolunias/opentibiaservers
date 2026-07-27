import Tibia100EvoWikiKeywordPage, { generateMetadata } from './tibia-10-0-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoWikiKeywordPage />;
}
