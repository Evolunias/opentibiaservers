import Tibia772EvoWikiKeywordPage, { generateMetadata } from './tibia-7-72-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772EvoWikiKeywordPage />;
}
