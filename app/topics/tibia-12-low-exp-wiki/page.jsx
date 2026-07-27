import Tibia12LowExpWikiKeywordPage, { generateMetadata } from './tibia-12-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpWikiKeywordPage />;
}
