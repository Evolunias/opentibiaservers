import Tibia76EvoWikiKeywordPage, { generateMetadata } from './tibia-7-6-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76EvoWikiKeywordPage />;
}
