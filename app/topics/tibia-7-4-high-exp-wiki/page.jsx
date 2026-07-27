import Tibia74HighExpWikiKeywordPage, { generateMetadata } from './tibia-7-4-high-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74HighExpWikiKeywordPage />;
}
