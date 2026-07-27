import Tibia86EvoWikiKeywordPage, { generateMetadata } from './tibia-8-6-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86EvoWikiKeywordPage />;
}
