import Tibia71LowExpWikiKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpWikiKeywordPage />;
}
