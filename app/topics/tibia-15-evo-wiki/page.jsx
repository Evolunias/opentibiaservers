import Tibia15EvoWikiKeywordPage, { generateMetadata } from './tibia-15-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoWikiKeywordPage />;
}
