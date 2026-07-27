import Tibia14EvoWikiKeywordPage, { generateMetadata } from './tibia-14-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoWikiKeywordPage />;
}
