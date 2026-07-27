import Tibia14LowExpWikiKeywordPage, { generateMetadata } from './tibia-14-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpWikiKeywordPage />;
}
