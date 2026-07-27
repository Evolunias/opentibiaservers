import Tibia12EvoWikiKeywordPage, { generateMetadata } from './tibia-12-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoWikiKeywordPage />;
}
