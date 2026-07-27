import Tibia84EvoWikiKeywordPage, { generateMetadata } from './tibia-8-4-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoWikiKeywordPage />;
}
