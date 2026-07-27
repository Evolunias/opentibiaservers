import Tibia74EvoWikiKeywordPage, { generateMetadata } from './tibia-7-4-evo-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74EvoWikiKeywordPage />;
}
